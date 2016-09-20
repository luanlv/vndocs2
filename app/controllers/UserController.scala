package controllers

import javax.inject.{ Inject, Singleton ***REMOVED***

import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import models.Setup
import models.services.{ ArticleService, CategoryService, PostService, SetupService ***REMOVED***
import play.api.i18n.{ I18nSupport, MessagesApi ***REMOVED***
import play.api.libs.json.Json
import play.api.libs.ws.{ WS, WSClient ***REMOVED***
import play.api.mvc.{ Action, BodyParsers, Controller ***REMOVED***
import utils.silhouette.{ AuthController, MyEnv ***REMOVED***

import scala.concurrent.ExecutionContext.Implicits.global
import scala.sys.process._
import scala.language.postfixOps
import scala.concurrent.Future
import scala.util.{ Failure, Success ***REMOVED***

/**
 * The basic application controller.
 *
 * @param messagesApi The Play messages API.
 * @param silhouette The Silhouette stack.
 * @param socialProviderRegistry The social provider registry.
 * @param webJarAssets The webjar assets implementation.
 */

@Singleton
class UserController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  articleService: ArticleService,
  socialProviderRegistry: SocialProviderRegistry) extends AuthController {

  def votePost = silhouette.SecuredAction.async(parse.json) { implicit request =>
    (request.body \ "id").asOpt[String].map {
      postID =>
        {
          postService.vote(postID, request.identity.userID.toString).map {
            result =>
              result match {
                case Success(id) => Ok("Voted")
                case Failure(ex) => BadRequest(s"Error: ${ex.getMessage***REMOVED***")
            ***REMOVED***
        ***REMOVED***
      ***REMOVED***
  ***REMOVED***.getOrElse {
      Future.successful(BadRequest("not json"))
  ***REMOVED***
***REMOVED***

  def voteArticle = silhouette.SecuredAction.async(parse.json) { implicit request =>
    (request.body \ "id").asOpt[String].map {
      articleID =>
        {
          articleService.vote(articleID, request.identity.userID.toString).map {
            result =>
              result match {
                case Success(id) => Ok("Voted")
                case Failure(ex) => BadRequest(s"Error: ${ex.getMessage***REMOVED***")
            ***REMOVED***
        ***REMOVED***
      ***REMOVED***
  ***REMOVED***.getOrElse {
      Future.successful(BadRequest("not json"))
  ***REMOVED***
***REMOVED***

***REMOVED***
