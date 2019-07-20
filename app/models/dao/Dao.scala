package models
import scala.concurrent.{ Future, ExecutionContext }
import models.Tables

trait Dao {
  def updateUser(): Unit
  def selectUser(): Future[Seq[Tables.User]]
  def updateVenue(): Unit
  def selectVenue(): Future[Seq[Tables.Venue]]
}
