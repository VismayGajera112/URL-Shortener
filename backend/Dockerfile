FROM golang:1.22.2-alpine as builder

WORKDIR /app

ENV GIN_MODE=release

COPY go.* ./

RUN go mod download

COPY . .
RUN go build -o /app/build/url-shotener

FROM alpine:latest
COPY --from=builder /app/build/url-shotener /app/build/url-shotener

ENV PORT=9808

EXPOSE 9808

ENTRYPOINT [ "/app/build/url-shotener" ]