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
import play.api.libs.json.Json
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
class FileController @Inject() (
  ws: WSClient,
  val messagesApi: MessagesApi,
  silhouette: Silhouette[DefaultEnv],
  imageService: ImageService,
  socialProviderRegistry: SocialProviderRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  def getSize = Action(parse.json) { implicit request =>
    (request.body \ "url").asOpt[String].map { url =>
      Ok(Json.obj("size" -> getSizeImpl(url)))
  ***REMOVED***.getOrElse {
      BadRequest("Missing parameter [url]")
  ***REMOVED***
***REMOVED***

  def getSizeImpl(url: String): Long = {
    run(List(
      "curl -X HEAD -I  " + url,
      "grep Content-Length"
    )).toString.filter(_.isDigit).toLong
***REMOVED***

  def run(cmd: List[String]) = {
    try {
      commandBuilder(cmd.tail.reverse, cmd.head) !!
      //            "find . -name *.txt" #| "grep ftp" !!
  ***REMOVED*** catch {
      case e: Exception => Stream()
  ***REMOVED***
***REMOVED***

  def commandBuilder(cmd: List[String], result: ProcessBuilder): ProcessBuilder = {
    if (cmd.isEmpty)
      result
    else
      commandBuilder(cmd.tail, result #| cmd.head)
***REMOVED***

***REMOVED***
