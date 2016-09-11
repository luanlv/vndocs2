package models

import com.mohiva.play.silhouette.api.Identity
import models.daos.TemporalModel
import play.api.libs.json.Json
import reactivemongo.bson.{ BSONArray, BSONHandler, BSONString, Macros ***REMOVED***

import scala.concurrent.duration._
import org.joda.time.DateTime

case class Category(
  _id: Option[String], slug: String, sku: Option[Sku], name: String, description: String) extends Identity with TemporalModel {
***REMOVED***

object Category {
  implicit val skuFormat = Json.format[Sku]
  implicit val categoryFormat = Json.format[Category]
***REMOVED***

case class Sku(parent_id: String, name: String, slug: String) extends Identity with TemporalModel {
***REMOVED***

object Sku {
  implicit val skuFormat = Json.format[Sku]
***REMOVED***