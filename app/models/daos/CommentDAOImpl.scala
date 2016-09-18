package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***
import models.Comment
import modes.daos.CommentRepository

@Singleton
class CommentDAOImpl @Inject() (repository: CommentRepository) extends CommentDAO {
  def save(comment: Comment) = {
    repository.insert(comment)
***REMOVED***
***REMOVED***