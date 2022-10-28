FROM golang:alpine3.16 AS builder

WORKDIR /app
COPY . .
RUN go build main.go

FROM scratch
COPY --from=builder /app /app
ENTRYPOINT ["/app/main"]