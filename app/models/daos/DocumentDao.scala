package models.daos

import org.joda.time.DateTime
import play.api.Logger
import play.api.libs.json._
import play.modules.reactivemongo.ReactiveMongoApi
import play.modules.reactivemongo.json._
import reactivemongo.api.{ QueryOpts, ReadPreference }
import reactivemongo.api.indexes.{ Index, IndexType }
import reactivemongo.bson.{ BSONDocument, BSONObjectID }
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.Future
import scala.util.Try

/**
 * DAO for Mongo Documents
 */
abstract class DocumentDao[T <: TemporalModel](reactiveMongoApi: ReactiveMongoApi) extends BaseDao {

  lazy val collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection[JSONCollection](collectionName))

  def insert(document: T)(implicit writer: OWrites[T]): Future[Try[T]] = {
    //    document._id = Some(BSONObjectID.generate)
    //    document.created = Some(DateTime.now)
    //    document.updated = Some(DateTime.now)
    Logger.debug(s"Inserting document: [collection=$collectionName, data=$document]")
    recover(collection.flatMap(_.insert(document)))(document)

  }

  def find(query: JsObject = Json.obj())(implicit reader: Reads[T]): Future[List[T]] = {
    Logger.debug(s"Finding documents: [collection=$collectionName, query=$query]")
    collection.flatMap(_.find(query).cursor[T](ReadPreference.nearest).collect[List]())
  }

  def findImage(query: JsObject = Json.obj(), sort: JsObject = Json.obj(), page: Int, num: Int)(implicit reader: Reads[T]): Future[List[T]] = {
    Logger.debug(s"Finding documents: [collection=$collectionName, query=$query]")
    collection.flatMap(_.find(query).sort(sort).options(QueryOpts((page - 1) * num)).cursor[T](ReadPreference.nearest).collect[List]())
  }

  def getList(query: JsObject = Json.obj(), sort: JsObject = Json.obj(), page: Int, num: Int)(implicit reader: Reads[T]): Future[List[T]] = {
    Logger.debug(s"Finding documents: [collection=$collectionName, query=$query], sort=$sort, page=$page, num=$num")
    collection.flatMap(_.find(query).sort(sort).options(QueryOpts((page - 1) * num)).cursor[T](ReadPreference.nearest).collect[List](num))
  }

  def listParent()(implicit reader: Reads[T]): Future[List[T]] = {
    Logger.debug(s"Finding parrent category: [collection=$collectionName]")
    collection.flatMap(_.find(Json.obj("sku.parent_id" -> "NONE")).cursor[T](ReadPreference.nearest).collect[List]())
  }

  def findOne(query: JsObject)(implicit reader: Reads[T]): Future[Option[T]] = {
    Logger.debug(s"Finding one: [collection=$collectionName, query=$query]")
    collection.flatMap(_.find(query).one[T])
  }

  def findById(id: String)(implicit reader: Reads[T]): Future[Option[T]] = findOne(DBQueryBuilder.id(id))

  def findById(id: BSONObjectID)(implicit reader: Reads[T]): Future[Option[T]] = findOne(DBQueryBuilder.id(id))

  def findByKind(kind: String)(implicit reader: Reads[T]): Future[Option[T]] = {
    findOne(Json.obj("_id" -> kind))
  }

  def count(query: Option[JsObject] = None): Future[Int] = {
    collection.flatMap(_.count(query))
  }

  def update(id: String, document: T)(implicit writer: OWrites[T]): Future[Try[T]] = {
    //    document.updated = Some(new DateTime())
    Logger.debug(s"Updating document: [collection=$collectionName, id=$id, document=$document]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.set(document)))) {
      document
    }
  }

  def incComment(id: String)(implicit writer: OWrites[T]) = {
    //    document.updated = Some(new DateTime())
    Logger.debug(s"Updating document: [collection=$collectionName, id=$id ")
    recover(collection.flatMap(_.update(
      Json.obj("_id" -> id),
      Json.obj("$inc" -> Json.obj("nComment" -> 1)))
    )) {
      id
    }
  }

  def incView(id: String)(implicit writer: OWrites[T]) = {
    //    document.updated = Some(new DateTime())
    Logger.debug(s"Updating document: [collection=$collectionName, id=$id ")
    recover(collection.flatMap(_.update(
      Json.obj("_id" -> id),
      Json.obj("$inc" -> Json.obj("nView" -> 1)))
    )) {
      id
    }
  }

  def vote(id: String, userID: String)(implicit writer: OWrites[T]) = {
    //    document.updated = Some(new DateTime())
    Logger.debug(s"Updating document: [collection=$collectionName, id=$id ")
    recover(collection.flatMap(_.update(
      Json.obj("_id" -> id, "liker" -> Json.obj("$ne" -> userID)),
      Json.obj(
        "$inc" -> Json.obj("nLike" -> 1),
        "$push" -> Json.obj("liker" -> userID)
      ))
    )) {
      id
    }
  }

  def upsert(id: String, document: T)(implicit writer: OWrites[T]): Future[Try[T]] = {
    //    document.updated = Some(new DateTime())
    Logger.debug(s"Updating document: [collection=$collectionName, id=$id, document=$document]")
    recover(collection.flatMap(_.update(Json.obj("_id" -> id), DBQueryBuilder.set(document), upsert = true))) {
      document
    }
  }

  def update(id: String, query: JsObject): Future[Try[JsObject]] = {
    val data = updated(query)
    Logger.debug(s"Updating by query: [collection=$collectionName, id=$id, query=$data]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), data))) {
      data
    }
  }

  def updateUser(userId: String, query: JsObject): Future[Try[JsObject]] = {
    val data = updated(query)
    Logger.debug(s"Updating by query: [collection=$collectionName, UserId=$userId, query=$data]")
    recover(collection.flatMap(_.update(DBQueryBuilder.userId(userId), data))) {
      data
    }
  }

  //
  //  def removeUser(loginInfo) = {
  //
  //  }

  def updated(data: JsObject) = {
    data.validate((__ \ '$set).json.update(
      __.read[JsObject].map { o => o ++ Json.obj("updated" -> DateTime.now) }
    )).fold(
      error => data,
      success => success
    )
  }

  def push(id: String, data: JsObject): Future[Try[JsObject]] = {
    Logger.debug(s"pushing to document: [collection=$collectionName, id=$id, data=$data]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.push(data)))) {
      data
    }
  }

  def push[S](id: String, field: String, data: S)(implicit writer: OWrites[S]): Future[Try[S]] = {
    Logger.debug(s"Pushing to document: [collection=$collectionName, id=$id, field=$field data=$data]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.push(field, data)))) {
      data
    }
  }

  def pull(id: String, data: JsObject): Future[Try[JsObject]] = {
    Logger.debug(s"pulling from document: [collection=$collectionName, id=$id, data=$data]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.pull(data)))) {
      data
    }
  }

  def pull[S](id: String, field: String, query: S)(implicit writer: OWrites[S]): Future[Try[Boolean]] = {
    Logger.debug(s"Pulling from document: [collection=$collectionName, id=$id, field=$field query=$query]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.pull(field, query)))) {
      true
    }
  }

  def unset(id: String, field: String): Future[Try[Boolean]] = {
    Logger.debug(s"Unsetting from document: [collection=$collectionName, id=$id, field=$field]")
    recover(collection.flatMap(_.update(DBQueryBuilder.id(id), DBQueryBuilder.unset(field)))) {
      true
    }
  }

  def remove(id: String): Future[Try[Boolean]] = remove(BSONObjectID(id))

  def remove(id: BSONObjectID): Future[Try[Boolean]] = {
    Logger.debug(s"Removing document: [collection=$collectionName, id=$id]")
    recover(collection.flatMap(_.remove(DBQueryBuilder.id(id)))) {
      true
    }
  }

  def remove(query: JsObject, firstMatchOnly: Boolean = false): Future[Try[Boolean]] = {
    Logger.debug(s"Removing document(s): [collection=$collectionName, firstMatchOnly=$firstMatchOnly, query=$query]")
    recover(collection.flatMap(_.remove(query, firstMatchOnly = firstMatchOnly))) {
      true
    }
  }

  def ensureIndex(
    key: List[(String, IndexType)],
    name: Option[String] = None,
    unique: Boolean = false,
    background: Boolean = false,
    dropDups: Boolean = false,
    sparse: Boolean = false,
    version: Option[Int] = None,
    partialFilter: Option[BSONDocument] = None,
    options: BSONDocument = BSONDocument()) = {
    val index = Index(key, name, unique, background, dropDups, sparse, version, partialFilter, options)
    Logger.info(s"Ensuring index: $index")
    collection.flatMap(_.indexesManager.ensure(index))
  }
}
