package models.services

import models.{ Category, Post }

import scala.concurrent.Future

/**
 * Handles actions to users.
 */
trait CategoryService {

  def retrieve(id: String): Future[Option[Category]]

  def save(category: Category): Future[Category]

  def listParent: Future[List[Category]]

}
