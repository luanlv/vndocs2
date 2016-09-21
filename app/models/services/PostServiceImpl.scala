package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Post, User }
import models.daos.{ PostDAO, UserDAO }
import play.api.libs.concurrent.Execution.Implicits._

import scala.concurrent.Future
import scala.util.Try

class PostServiceImpl @Inject() (postDAO: PostDAO) extends PostService {

  def retrieve(id: String) = postDAO.find(id)

  def save(post: Post) = postDAO.save(post)

  def incComment(postID: String) = postDAO.incComment(postID)

  def vote(id: String, userID: String): Future[Try[String]] = postDAO.vote(id, userID)

  def count(): Future[Int] = {
    postDAO.count
  }

  def countByCategory(category: String): Future[Int] = {
    postDAO.countByCategory(category)
  }

  def getList(page: Int) = postDAO.getList(page)

  def getListByCategory(category: String, page: Int) = postDAO.getListByCategory(category, page)

}
