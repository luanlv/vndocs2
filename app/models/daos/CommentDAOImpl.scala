package models.daos

import javax.inject.{ Inject, Singleton }

import models.Comment
import modes.daos.CommentRepository
import play.api.libs.json.Json

@Singleton
class CommentDAOImpl @Inject() (repository: CommentRepository) extends CommentDAO {
  def save(comment: Comment) = {
    repository.insert(comment)
  }

  def getList(postID: String, page: Int) = {
    repository.getList(query = Json.obj("parentPost" -> postID), sort = Json.obj("time" -> -1), page = page, num = 10)
  }
}