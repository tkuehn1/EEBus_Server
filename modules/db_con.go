package modules
import (
	"atabase/sql"
	"github.com/go-sql-driver/mysql"
)
func dbConOpen(){
	db, err := sql.Open("mysql", "theUser:thePassword@/theDbName")
	if err != nil {
		panic(err)
	}
}

func dbConClose(){
	defer db.Close()
}
func main(){
	dbConOpen()

}


