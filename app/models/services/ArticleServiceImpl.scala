package models.services

import com.google.inject.{ Inject, Singleton ***REMOVED***
import models.Article
import models.daos.ArticleDAO

import scala.concurrent.Future
import scala.util.Try

@Singleton
class ArticleServiceImpl @Inject() (articleDAO: ArticleDAO) extends ArticleService {
  def find(id: String) = {
    articleDAO.find(id)
***REMOVED***

  def save(data: Article) = {
    articleDAO.save(data)
***REMOVED***

  def vote(id: String, userID: String): Future[Try[String]] = articleDAO.vote(id, userID)

  def incComment(id: String): Future[Try[String]] = {
    articleDAO.incComment(id)
***REMOVED***

  def getList(page: Int) = {
    articleDAO.getList(page)
***REMOVED***
***REMOVED***