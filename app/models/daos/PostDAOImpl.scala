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

  def find(id: String) = {
    repository.incComment(id)
    repository.findOne(Json.obj("_id" -> id))
***REMOVED***

  def save(post: Post) = {
    repository.insert(post)
    Future.successful(post)
***REMOVED***

  def incComment(postID: String) = {
    repository.incComment(postID)
***REMOVED***

  def getList(page: Int) = {
    repository.getList(sort = Json.obj("time" -> -1), page = page, num = 10)
***REMOVED***

  def getListByCategory(category: String, page: Int) = {
    repository.getList(query = Json.obj("categories" -> category), sort = Json.obj("time" -> -1), page = page, num = 10)
***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object PostDAOImpl {

***REMOVED***
