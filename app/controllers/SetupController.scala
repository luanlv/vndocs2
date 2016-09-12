package controllers

import java.io.File
import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import com.sksamuel.scrimage
import com.sksamuel.scrimage.ScaleMethod.Bicubic
import models.Image
import models.services.{ ImageService, SetupService ***REMOVED***
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
class SetupController @Inject() (
  ws: WSClient,
  val messagesApi: MessagesApi,
  silhouette: Silhouette[DefaultEnv],
  setupService: SetupService,
  socialProviderRegistry: SocialProviderRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  def getMenu = Action.async { implicit request =>

    setupService.retrieve("menu").map { menu =>
      Ok(menu.get.value)
  ***REMOVED***

***REMOVED***
***REMOVED***