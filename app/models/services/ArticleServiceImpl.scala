package models.services

import com.google.inject.{ Inject, Singleton ***REMOVED***
import models.Article
import models.daos.ArticleDAO

@Singleton
class ArticleServiceImpl @Inject() (articleDAO: ArticleDAO) extends ArticleService {
  def find(id: String) = {
    articleDAO.find(id)
***REMOVED***

  def save(data: Article) = {
    articleDAO.save(data)
***REMOVED***
***REMOVED***