package models.daos

import models.Article

import scala.concurrent.Future
import scala.util.Try

trait ArticleDAO {
  def find(id: String): Future[Option[Article]]

  def save(data: Article): Future[Try[Article]]
***REMOVED***