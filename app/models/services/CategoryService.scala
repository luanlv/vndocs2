package models.services

import javax.inject.Inject

import models.daos.CategoryDAO
import models.{ Category, Post }

import scala.concurrent.Future

trait CategoryService {

  def retrieve(id: String): Future[Option[Category]]

  def save(category: Category): Future[Category]

  def listParent: Future[List[Category]]

}

class CategoryServiceImpl @Inject() (categoryDAO: CategoryDAO) extends CategoryService {

  def retrieve(id: String) = categoryDAO.find(id)

  def save(category: Category) = categoryDAO.save(category)

  def listParent = categoryDAO.listParent

}