package models
import play.api.libs.json._
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
trait TableRow {}

object Tables extends {
  val profile = slick.driver.MySQLDriver
} with Tables

trait Tables {
  val profile: slick.driver.JdbcProfile
  import profile.api._

  case class User(id: Int, name: String) extends TableRow
  implicit val jsonUserWrites = Json.writes[User]
  implicit val jsonUserReads = Json.reads[User]
  class UserTable(tag: Tag) extends Table[User](tag, "user") {
      def id = column[Int]("id", O.PrimaryKey)
      def name = column[String]("name")

      def * = (id, name) <> ((User.apply _).tupled, User.unapply)
  }
  val user = TableQuery[UserTable]

  case class Venue(id: Int, name: String, address: String) extends TableRow
  implicit val jsonVenueWrites = Json.writes[Venue]
  implicit val jsonVenueReads = Json.reads[Venue]
  class VenueTable(tag: Tag) extends Table[Venue](tag, "venue") {
      def id = column[Int]("id", O.PrimaryKey)
      def name = column[String]("name")
      def address = column[String]("address")

      def * = (id, name, address) <> ((Venue.apply _).tupled, Venue.unapply)
  }
  val venue = TableQuery[VenueTable]

}
