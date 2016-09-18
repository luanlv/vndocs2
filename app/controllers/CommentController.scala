package controllers

import com.google.inject.{ Inject, Singleton ***REMOVED***
import com.mohiva.play.silhouette.api.Silhouette
import models.{ Comment, LightUser ***REMOVED***
import models.services.CommentService
import play.api.i18n.MessagesApi
import play.api.libs.json.{ JsObject, Json ***REMOVED***
import utils.silhouette.{ AuthController, MyEnv, WithService ***REMOVED***

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class CommentController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  commentService: CommentService,
  socialAuthController: SocialAuthController)
  extends AuthController {

  def doComment(postID: String) = silhouette.SecuredAction(WithService("master")).async(parse.json) { implicit request =>
    (request.body \ "data").asOpt[String].map {
      comment =>
        {
          val newComment = Comment(
            parentPost = postID,
            comment = comment,
            user = LightUser.trimUser(request.identity)
          )
          commentService.save(newComment)
          Future.successful(Ok("OK"))
      ***REMOVED***
  ***REMOVED***.getOrElse {
      Future.successful(BadRequest("not json"))
  ***REMOVED***
***REMOVED***

  def getList(postID: String, page: Int) = silhouette.UserAwareAction.async { implicit request =>
    commentService.getList(postID, page).map {
      listComments =>
        Ok(Json.toJson(listComments))
  ***REMOVED***
***REMOVED***

***REMOVED***