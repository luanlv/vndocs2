package models.services

import models.{ Image, Post }

import scala.concurrent.Future
import scala.util.Try

trait PostService {

  def retrieve(id: String): Future[Option[Post]]

  def save(post: Post): Future[Post]

  def incComment(postID: String): Future[Try[String]]

  def vote(id: String, userID: String): Future[Try[String]]

  def count(): Future[Int]

  def countByCategory(category: String): Future[Int]

  def getList(page: Int): Future[List[Post]]

  def getListByCategory(category: String, page: Int): Future[List[Post]]
  //  def getList(page: Int): Future[List[Image]]

}
