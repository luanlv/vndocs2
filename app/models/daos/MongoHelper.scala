package models.daos

import reactivemongo.bson.{ BSONObjectID, BSONValue ***REMOVED***

/**
 * Helper around MongoDB resources
 */
trait MongoHelper extends ContextHelper {

***REMOVED***

object MongoHelper extends MongoHelper {

  def identity(bson: BSONValue) = bson.asInstanceOf[BSONObjectID].stringify

***REMOVED***