package controllers

import java.io.File
import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import com.sksamuel.scrimage
import com.sksamuel.scrimage.ScaleMethod.Bicubic
import models.Image
import models.services.{ CategoryService, ImageService, PostService, SetupService ***REMOVED***
import play.api.libs.json.{ JsObject, JsValue, Json ***REMOVED***
//import com.sksamuel.scrimage.Image
//import com.sksamuel.scrimage.ScaleMethod.Bicubic
//import com.sksamuel.scrimage.nio.JpegWriter
import play.api.i18n.{ I18nSupport, MessagesApi ***REMOVED***
import play.api.libs.iteratee.Enumerator
import play.api.libs.ws.{ WS, WSClient ***REMOVED***
import play.api.mvc.{ Action, Controller ***REMOVED***
import utils.auth.DefaultEnv

import scala.concurrent.ExecutionContext.Implicits.global
import scala.sys.process._
import scala.language.postfixOps
import scala.concurrent.Future

/**
 * The basic application controller.
 *
 * @param messagesApi The Play messages API.
 * @param silhouette The Silhouette stack.
 * @param socialProviderRegistry The social provider registry.
 * @param webJarAssets The webjar assets implementation.
 */
class PostController @Inject() (
  ws: WSClient,
  val messagesApi: MessagesApi,
  silhouette: Silhouette[DefaultEnv],
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  socialProviderRegistry: SocialProviderRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  def index(postID: String) = silhouette.UnsecuredAction.async { implicit request =>
    println(" post indexing !!!!!!!!!!!!!")
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.retrieve(postID)
  ***REMOVED*** yield (menu, categories, post)
    data.map { data =>
      Ok(views.html.post(
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString))
  ***REMOVED***
***REMOVED***

  def indexLogged(postID: String) = silhouette.SecuredAction.async { implicit request =>
    println("logged post indexing !!!!!!!!!!!!!")
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.retrieve(postID)
  ***REMOVED*** yield (menu, categories, post)
    data.map { data =>
      Ok(views.html.post2(
        request.identity,
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString))
  ***REMOVED***
***REMOVED***

  def getPost(page: Int) = Action.async { implicit request =>
    postService.getList(page).map { post =>
      Ok(Json.toJson(post))
  ***REMOVED***
***REMOVED***
***REMOVED***
