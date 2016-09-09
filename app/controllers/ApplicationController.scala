package controllers

import javax.inject.Inject

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import play.api.i18n.{ I18nSupport, MessagesApi ***REMOVED***
import play.api.libs.ws.{ WS, WSClient ***REMOVED***
import play.api.mvc.Controller
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
class ApplicationController @Inject() (
  ws: WSClient,
  val messagesApi: MessagesApi,
  silhouette: Silhouette[DefaultEnv],
  socialProviderRegistry: SocialProviderRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  /**
   * Handles the index action.
   *
   * @return The result to display.
   */
  def index = silhouette.SecuredAction.async { implicit request =>
    println("-__________________________________________----------------------________")
    println("====" + getSize("http://linuxarea.com/new/HUGE%20COLLECTION%20IELTS%20MATERIALS/IELTS%20PRACTICE%20TEST/ACHIEVE%202%20IELTS%20%20%282006%20Marshall%20Cavendish%29.rar"))
    Future.successful(Ok(views.html.index(request.identity)))
***REMOVED***

  /**
   * Handles the Sign Out action.
   *
   * @return The result to display.
   */
  def signOut = silhouette.SecuredAction.async { implicit request =>
    val result = Redirect(routes.ApplicationController.index())
    silhouette.env.eventBus.publish(LogoutEvent(request.identity, request))
    silhouette.env.authenticatorService.discard(request.authenticator, result)
***REMOVED***

  def getSize(url: String) = {
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
