package controllers

import javax.inject.{ Inject, Singleton }

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette }
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import models.Setup
import models.services.{ ArticleService, CategoryService, PostService, SetupService }
import play.api.i18n.{ I18nSupport, MessagesApi }
import play.api.libs.json.Json
import play.api.libs.ws.{ WS, WSClient }
import play.api.mvc.{ Action, BodyParsers, Controller }
import utils.silhouette.{ AuthController, MyEnv }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.sys.process._
import scala.language.postfixOps
import scala.concurrent.Future

@Singleton
class ApplicationController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  articleService: ArticleService,
  socialProviderRegistry: SocialProviderRegistry) extends AuthController {

  /**
   * Handles the index action.
   *
   * @return The result to display.
   */
  def index = UserAwareAction.async { implicit request =>
    val page = request.getQueryString("p").getOrElse("1")
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      posts <- postService.getList(page.toInt)
      articles <- articleService.getList(1)
      totalPosts <- postService.count()
    } yield (menu, categories, posts, articles, totalPosts)
    data.map { data =>
      Ok(views.html.home(
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString,
        data._5
      ))
    }
  }

  //  def indexLogged = silhouette.SecuredAction.async { implicit request =>
  //    val data = for {
  //      menu <- setupService.retrieve("menu")
  //      categories <- categoryService.listParent
  //      posts <- postService.getList(1)
  //    } yield (menu, categories, posts)
  //    data.map { data =>
  //      Ok(views.html.home2(
  //        request.identity,
  //        Json.toJson(data._1.get.value).toString,
  //        Json.toJson(data._2).toString,
  //        Json.toJson(data._3).toString))
  //    }
  //  }

  def index2 = silhouette.SecuredAction.async(parse.json) { implicit request =>
    Future.successful(Ok("ok"))
  }

  /**
   * Handles the Sign Out action.
   *
   * @return The result to display.
   */
  def signOut = silhouette.SecuredAction.async { implicit request =>
    val forward = request.getQueryString("forward").getOrElse("/")
    val result = Redirect(forward)
    silhouette.env.eventBus.publish(LogoutEvent(request.identity, request))
    silhouette.env.authenticatorService.discard(request.authenticator, result)
  }

}
