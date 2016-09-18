package models.services

import com.google.inject.{ Inject, Singleton ***REMOVED***
import models.Comment
import models.daos.CommentDAO

@Singleton
class CommentServiceImpl @Inject() (commentDAO: CommentDAO) extends CommentService {
  def save(comment: Comment) = {
    commentDAO.save(comment)
***REMOVED***

  def getList(postID: String, page: Int) = {
    commentDAO.getList(postID, page)
***REMOVED***
***REMOVED***