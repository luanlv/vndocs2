package controllers

import com.google.inject.{ Inject, Singleton ***REMOVED***
import com.mohiva.play.silhouette.api.Silhouette
import models.services.CommentService
import play.api.i18n.MessagesApi
import play.api.libs.json.JsObject
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
    println("==========================================================================")
    request.body.asOpt[JsObject].map {
      data => println(data)
  ***REMOVED***
    Future.successful(Ok("ok"))
***REMOVED***

***REMOVED***