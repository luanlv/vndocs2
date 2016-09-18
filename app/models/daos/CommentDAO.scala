package models.daos

import models.Comment

import scala.concurrent.Future
import scala.util.Try

trait CommentDAO {
  def save(comment: Comment): Future[Try[Comment]]
***REMOVED***