package controllers

import java.io.File
import java.util.UUID
import javax.inject.Inject

import com.google.inject.Singleton
import com.mohiva.play.silhouette.api.{ LogoutEvent, Silhouette ***REMOVED***
import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import com.sksamuel.scrimage
import com.sksamuel.scrimage.ScaleMethod.Bicubic
import models.Image
import models.services._
import play.api.libs.json.{ JsObject, JsValue, Json ***REMOVED***
import utils.silhouette.{ AuthController, MyEnv ***REMOVED***
//import com.sksamuel.scrimage.Image
//import com.sksamuel.scrimage.ScaleMethod.Bicubic
//import com.sksamuel.scrimage.nio.JpegWriter
import play.api.i18n.{ I18nSupport, MessagesApi ***REMOVED***
import play.api.libs.iteratee.Enumerator
import play.api.libs.ws.{ WS, WSClient ***REMOVED***
import play.api.mvc.{ Action, Controller ***REMOVED***

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

@Singleton
class PostController @Inject() (
  val messagesApi: MessagesApi,
  val silhouette: Silhouette[MyEnv],
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  commentService: CommentService,
  articleService: ArticleService,
  socialProviderRegistry: SocialProviderRegistry)
  extends AuthController {

  def index(postID: String) = UserAwareAction.async { implicit request =>
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.retrieve(postID)
      comments <- commentService.getList(postID, 1)
      articles <- articleService.getList(1)
  ***REMOVED*** yield (menu, categories, post, comments, articles)
    data.map { data =>
      Ok(views.html.post(
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString,
        Json.toJson(data._5).toString
      ))
  ***REMOVED***
***REMOVED***

  def getPosts(page: Int) = Action.async { implicit request =>
    val data = for {
      posts <- postService.getList(page)
      total <- postService.count
  ***REMOVED*** yield (posts, total)
    data.map { data =>
      Ok(
        Json.obj(
          "posts" -> Json.toJson(data._1),
          "total" -> data._2
        )
      )
  ***REMOVED***
***REMOVED***

  def postsByCategoryIndex(categorySlug: String) = UserAwareAction.async { implicit request =>
    val data = for {
      menu <- setupService.retrieve("menu")
      categories <- categoryService.listParent
      post <- postService.getListByCategory(categorySlug, 1)
      articles <- articleService.getList(1)
  ***REMOVED*** yield (menu, categories, post, articles)
    data.map { data =>
      Ok(views.html.home(
        Json.toJson(data._1.get.value).toString,
        Json.toJson(data._2).toString,
        Json.toJson(data._3).toString,
        Json.toJson(data._4).toString
      ))
  ***REMOVED***
***REMOVED***

  def getPostsByCategory(categorySlug: String, page: Int) = Action.async { implicit request =>
    postService.getListByCategory(categorySlug, page).map { post =>
      Ok(Json.toJson(post))
  ***REMOVED***
***REMOVED***

  def getPost(postID: String) = Action.async { implicit request =>
    val data = for {
      post <- postService.retrieve(postID)
      comments <- commentService.getList(postID, 1)
  ***REMOVED*** yield (post, comments)
    data.map { data =>
      Ok(Json.obj(
        "post" -> Json.toJson(data._1),
        "comments" -> Json.toJson(data._2)
      ))
  ***REMOVED***
***REMOVED***
***REMOVED***
