package models.daos

import javax.inject.{ Inject, Singleton }

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, Post, User }
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, Json }

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class PostDAOImpl @Inject() (repository: PostRepository) extends PostDAO {

  def find(id: String) = {
    repository.incView(id)
    repository.findOne(Json.obj("_id" -> id))
  }

  def save(post: Post) = {
    repository.insert(post)
    Future.successful(post)
  }

  def incComment(postID: String) = {
    repository.incComment(postID)
  }

  def vote(id: String, userID: String): Future[Try[String]] = {
    repository.vote(id, userID)
  }

  def count: Future[Int] = {
    repository.count()
  }

  def countByCategory(category: String): Future[Int] = {
    repository.count(Option(Json.obj("categories" -> category)))
  }

  def getList(page: Int) = {
    repository.getList(sort = Json.obj("time" -> -1), page = page, num = 5)
  }

  def getListByCategory(category: String, page: Int) = {
    repository.getList(query = Json.obj("categories" -> category), sort = Json.obj("time" -> -1), page = page, num = 5)
  }

}

/**
 * The companion object.
 */
object PostDAOImpl {

}
