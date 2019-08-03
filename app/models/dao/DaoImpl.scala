package models

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import scala.concurrent.{ Future, ExecutionContext }
import models.{ Dao, Tables}

@Singleton
class DaoImpl @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) extends Dao {
  val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  def selectUsers() = db.run{
    Tables.user.result
  }
  //def selectUser(id: Int) = db.run(Tables.user.result).map(_.filter(_.id==id).headOption)
  def selectUser(id: Int) =  db.run{
    (for(user <- Tables.user if user.id === id) yield (user)).result
  }.map(_.headOption)
  def updateUser() = {}
  def selectVenue() = db.run{
    Tables.venue.result
  }
  def updateVenue() = {}

}
