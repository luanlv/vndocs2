package models.services

import models.Article

import scala.concurrent.Future
import scala.util.Try

trait ArticleService {
  def find(id: String): Future[Option[Article]]

  def save(data: Article): Future[Try[Article]]

  def incComment(id: String): Future[Try[String]]

  def getList(page: Int): Future[List[Article]]
***REMOVED***