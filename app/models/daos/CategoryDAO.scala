package models.daos

import models.{ Category, Image ***REMOVED***

import scala.concurrent.Future

/**
 * Give access to the user object.
 */
trait CategoryDAO {

  def find(id: String): Future[Option[Category]]

  def save(category: Category): Future[Category]

***REMOVED***
