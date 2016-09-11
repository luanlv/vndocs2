package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, Post, User ***REMOVED***
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, Json ***REMOVED***

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class PostDAOImpl @Inject() (repository: PostRepository) extends PostDAO {

  def find(id: String) =
    repository.findOne(Json.obj("_id" -> id))

  def save(post: Post) = {
    repository.insert(post)
    Future.successful(post)
***REMOVED***

  //  def getList(page: Int) = {
  //    repository.findImage(sort = Json.obj("createAt" -> -1), page = page, num = 20)
  //***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object PostDAOImpl {

***REMOVED***
