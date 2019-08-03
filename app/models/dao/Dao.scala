package models
import scala.concurrent.{ Future, ExecutionContext }
import models.Tables

trait Dao {
  def updateUser(): Unit
  def selectUser(id: Int): Future[Option[Tables.User]]
  def selectUsers(): Future[Seq[Tables.User]]
  def updateVenue(): Unit
  def selectVenue(): Future[Seq[Tables.Venue]]
}
