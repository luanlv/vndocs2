package models.daos

import com.google.inject.{ Inject, Singleton ***REMOVED***
import models.Article
import play.api.libs.json.Json

import scala.concurrent.Future
import scala.util.Try

@Singleton
class ArticleDAOImpl @Inject() (repository: ArticleRepository) extends ArticleDAO {
  def find(id: String) = {
    repository.incView(id)
    repository.findOne(Json.obj("_id" -> id))
***REMOVED***

  def save(data: Article) = {
    repository.insert(data)
***REMOVED***

  def vote(id: String, userID: String): Future[Try[String]] = {
    repository.vote(id, userID)
***REMOVED***

  def incComment(id: String): Future[Try[String]] = {
    repository.incComment(id)
***REMOVED***

  def getList(page: Int) = {
    repository.getList(sort = Json.obj("time" -> -1), page = page, num = 10)
***REMOVED***
***REMOVED***