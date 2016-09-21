package models.daos

import models.Comment

import scala.concurrent.Future
import scala.util.Try

trait CommentDAO {
  def save(comment: Comment): Future[Try[Comment]]
  def getList(postID: String, page: Int): Future[List[Comment]]
}