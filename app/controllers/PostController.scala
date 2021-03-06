package controllers

import java.io.File
import java.util.UUID
import javax.inject.Inject

import com.google.inject.Singleton
import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette }
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import com.sksamuel.scrimage
import com.sksamuel.scrimage.ScaleMethod.Bicubic
import models.Image
import models.services._
import play.api.libs.concurrent.Promise
import play.api.libs.json.{ JsObject, JsValue, Json }
import utils.silhouette.{ AuthController, MyEnv }
//import com.sksamuel.scrimage.Image
//import com.sksamuel.scrimage.ScaleMethod.Bicubic
//import com.sksamuel.scrimage.nio.JpegWriter
import play.api.i18n.{ I18nSupport, MessagesApi }
import play.api.libs.iteratee.Enumerator
import play.api.libs.ws.{ WS, WSClient }
import play.api.mvc.{ Action, Controller }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.sys.process._
import scala.language.postfixOps
import scala.concurrent.Future
import scala.concurrent.duration._

@Singleton
class PostController @Inject() (
  val messagesApi: MessagesApi,
  val silhouette: Silhouette[MyEnv],
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  commentService: CommentService,
  articleService: ArticleService,
  socialProviderRegistry: SocialProviderRegistry)
  extends AuthController {

  def index(postID: String) = UserAwareAction.async { implicit request =>
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.retrieve(postID)
      comments <- commentService.getList(postID, 1)
      articles <- articleService.getList(1)
    } yield (menu, categories, post, comments, articles)
    data.map { data =>
      Ok(views.html.post(
        data._3.get.title,
        data._1.get.value.toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString,
        Json.toJson(data._5).toString
      ))
    }
  }

  def getPosts(page: Int) = Action.async { implicit request =>
    val data = for {
      posts <- postService.getList(page)
      total <- postService.count
    } yield (posts, total)

    //    val futureData = Promise.timeout(data, 5.second).flatMap(x => x)

    data.map { data =>
      Ok(
        Json.obj(
          "posts" -> Json.toJson(data._1),
          "total" -> data._2
        )
      )
    }
  }

  def postsByCategoryIndex(categorySlug: String) = UserAwareAction.async { implicit request =>
    val page = request.getQueryString("p").getOrElse("1")
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.getListByCategory(categorySlug, page.toInt)
      articles <- articleService.getList(1)
      totalPosts <- postService.countByCategory(categorySlug)
    } yield (menu, categories, post, articles, totalPosts)
    data.map { data =>
      Ok(views.html.home(
        data._1.get.value.toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString,
        data._5
      ))
    }
  }

  def getPostsByCategory(categorySlug: String, page: Int) = Action.async { implicit request =>
    val data = for {
      posts <- postService.getListByCategory(categorySlug, page)
      totalPosts <- postService.countByCategory(categorySlug)
    } yield (posts, totalPosts)
    data.map { data =>
      Ok(
        Json.obj(
          "posts" -> Json.toJson(data._1),
          "total" -> data._2
        )
      )
    }
  }

  def getPost(postID: String) = Action.async { implicit request =>
    val data = for {
      post <- postService.retrieve(postID)
      comments <- commentService.getList(postID, 1)
    } yield (post, comments)
    data.map { data =>
      Ok(Json.obj(
        "post" -> Json.toJson(data._1),
        "comments" -> Json.toJson(data._2)
      ))
    }
  }
}
