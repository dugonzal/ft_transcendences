# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: Dugonzal <dugonzal@student.42urduliz.com>  +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/06/25 20:40:21 by Dugonzal          #+#    #+#              #
#    Updated: 2024/07/29 22:21:15 by Dugonzal         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine:3.20 AS builder

LABEL traefik.enable=true
LABEL traefik.http.routers.frontend.rule="Host(`localhost`) && PathPrefix(`/`)"
LABEL traefik.http.services.frontend.loadbalancer.server.port=80

RUN apk add --no-cache npm=10.8.0-r0 nodejs=20.15.1-r0

WORKDIR /frontend

COPY frontend .

RUN npm update vite && npm i

CMD npm --prefix /frontend/frontend run dev -- --host
