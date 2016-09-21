package controllers

import com.google.inject.{ Inject, Singleton }
import com.mohiva.play.silhouette.api.Silhouette
import models.{ Article, Comment, Cover, LightUser }
import models.services.{ ArticleService, CategoryService, CommentService, SetupService }
import play.api.i18n.MessagesApi
import play.api.libs.json.{ JsObject, Json }
import play.api.mvc.Action
import utils.silhouette.{ AuthController, MyEnv, WithService }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class ArticleController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  commentService: CommentService,
  setupService: SetupService,
  categoryService: CategoryService,
  articleService: ArticleService,
  socialAuthController: SocialAuthController)
  extends AuthController {

  def index(slug: String) = silhouette.UserAwareAction.async { implicit request =>
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      article <- articleService.find(slug)
      comments <- commentService.getList(slug, 1)
      articles <- articleService.getList(1)
    } yield (menu, categories, article, comments, articles)

    data.map { data =>
      Ok(views.html.article(
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString,
        Json.toJson(data._5).toString
      ))
    }

  }

  def getArticle(slug: String) = silhouette.UserAwareAction.async { implicit request =>
    val data = for {
      article <- articleService.find(slug)
      comments <- commentService.getList(slug, 1)
    } yield (article, comments)
    data.map { data =>
      Ok(Json.obj(
        "article" -> Json.toJson(data._1),
        "comments" -> Json.toJson(data._2)
      ))
    }
  }

  def getArticles(page: Int) = silhouette.UserAwareAction.async { implicit request =>
    articleService.getList(page).map { articles =>
      Ok(Json.toJson(articles))
    }
  }

  def doArticle = silhouette.SecuredAction.async(parse.json) { implicit request =>
    request.body.asOpt[JsObject].map { article =>
      val newArticle = Article(
        _id = (article \ "_id").get.as[String],
        title = (article \ "title").get.as[String],
        cover = (article \ "cover").get.as[Cover],
        body = (article \ "body").get.as[String],
        author = LightUser.trimUser(request.identity),
        tags = (article \ "tags").get.as[List[String]]
      )

      articleService.save(newArticle)
      Future.successful(Ok("ok"))
    }.getOrElse {
      Future.successful(BadRequest("not json"))
    }
  }

}