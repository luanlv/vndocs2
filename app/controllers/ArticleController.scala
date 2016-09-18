package controllers

import com.google.inject.{ Inject, Singleton ***REMOVED***
import com.mohiva.play.silhouette.api.Silhouette
import models.{ Article, Comment, LightUser ***REMOVED***
import models.services.{ ArticleService, CommentService ***REMOVED***
import play.api.i18n.MessagesApi
import play.api.libs.json.{ JsObject, Json ***REMOVED***
import play.api.mvc.Action
import utils.silhouette.{ AuthController, MyEnv, WithService ***REMOVED***

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class ArticleController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  commentService: CommentService,
  articleService: ArticleService,
  socialAuthController: SocialAuthController)
  extends AuthController {

  def doArticle = silhouette.SecuredAction.async(parse.json) { implicit request =>
    request.body.asOpt[JsObject].map { article =>
      val newArticle = Article(
        _id = (article \ "_id").get.as[String],
        title = (article \ "title").get.as[String],
        body = (article \ "body").get.as[String],
        author = LightUser.trimUser(request.identity),
        tags = (article \ "tags").get.as[List[String]]
      )

      articleService.save(newArticle)
      Future.successful(Ok("ok"))
  ***REMOVED***.getOrElse {
      Future.successful(BadRequest("not json"))
  ***REMOVED***
***REMOVED***

***REMOVED***