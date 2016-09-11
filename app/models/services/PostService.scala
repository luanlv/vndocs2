package models.services

import models.{ Image, Post ***REMOVED***

import scala.concurrent.Future

/**
 * Handles actions to users.
 */
trait PostService {

  def retrieve(id: String): Future[Option[Post]]

  def save(post: Post): Future[Post]

  //  def getList(page: Int): Future[List[Image]]

***REMOVED***
