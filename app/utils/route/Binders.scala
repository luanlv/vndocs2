package utils.route

import java.util.UUID

import play.api.mvc.PathBindable

/**
 * Some route binders.
 */
object Binders {

  /**
   * A [[java.util.UUID]] bindable.
   */
  implicit object UUIDPathBindable extends PathBindable[UUID] {
    def bind(key: String, value: String) = try {
      Right(UUID.fromString(value))
  ***REMOVED*** catch {
      case e: Exception => Left("Cannot parse parameter '" + key + "' with value '" + value + "' as UUID")
  ***REMOVED***

    def unbind(key: String, value: UUID): String = value.toString
***REMOVED***
***REMOVED***
