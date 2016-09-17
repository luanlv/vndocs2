package models.daos

import models.{ Image, Post ***REMOVED***

import scala.concurrent.Future

/**
 * Give access to the user object.
 */
trait PostDAO {

  def find(id: String): Future[Option[Post]]

  def save(post: Post): Future[Post]

  def getList(page: Int): Future[List[Post]]

  def getListByCategory(category: String, page: Int): Future[List[Post]]

  //  def getList(page: Int): Future[List[Post]]

***REMOVED***
