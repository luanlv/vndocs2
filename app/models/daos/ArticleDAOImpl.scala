package models.daos

import com.google.inject.{ Inject, Singleton ***REMOVED***
import models.Article
import play.api.libs.json.Json

@Singleton
class ArticleDAOImpl @Inject() (repository: ArticleRepository) extends ArticleDAO {
  def find(id: String) = {
    repository.findOne(Json.obj("_id" -> id))
***REMOVED***

  def save(data: Article) = {
    repository.insert(data)
***REMOVED***
***REMOVED***