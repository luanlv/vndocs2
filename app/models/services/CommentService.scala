package models.services

import models.Comment

import scala.concurrent.Future
import scala.util.Try

trait CommentService {
  def save(comment: Comment): Future[Try[Comment]]
***REMOVED***