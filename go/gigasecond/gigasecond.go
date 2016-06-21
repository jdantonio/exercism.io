package gigasecond

import (
	"math"
	"time"
)

const testVersion = 4

var gigasecond = int64(math.Pow(10, 9))

func AddGigasecond(t time.Time) time.Time {
	return time.Unix(t.Unix()+gigasecond, 0).UTC()
}
