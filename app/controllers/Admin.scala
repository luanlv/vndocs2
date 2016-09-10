package controllers

import java.io.File
import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import com.sksamuel.scrimage
import com.sksamuel.scrimage.ScaleMethod.Bicubic
import models.Image
import models.services.ImageService
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
class Admin @Inject() (
  ws: WSClient,
  val messagesApi: MessagesApi,
  silhouette: Silhouette[DefaultEnv],
  imageService: ImageService,
  socialProviderRegistry: SocialProviderRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  /**
   * Handles the index action.
   *
   * @return The result to display.
   */
  def index = silhouette.UnsecuredAction.async { implicit request =>

    Future.successful(Ok(views.html.admin.index("Trang chu")))
***REMOVED***

  def uploadImage = Action.async(parse.multipartFormData) { implicit request =>
    val uuid = UUID.randomUUID().toString
    request.body.file("file").map { picture =>
      import java.io.File
      val filename = picture.filename
      val contentType = picture.contentType
      val path = s"/tmp/$filename"
      resize(picture.ref.moveTo(new File(path)))
      val image = models.Image(
        id = uuid,
        filename = filename,
        contentType = contentType,
        path = path
      )
      imageService.save(image)
      Future.successful(Ok("File uploaded"))
  ***REMOVED***.getOrElse {
      Future.successful(BadRequest("error"))
  ***REMOVED***
***REMOVED***

  private def resize(file: File) = {

    import com.sksamuel.scrimage._

    scrimage.Image.fromFile(file).scaleTo(94, 128, Bicubic).output(file)
***REMOVED***

***REMOVED***
