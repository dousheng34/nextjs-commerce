# Техническая спецификация «НейроДиета»

## Архитектура
- **Мобильное приложение**: Flutter (iOS/Android), BLoC/Redux-style state, offline cache.
- **Бэкенд**: Python FastAPI + Postgres, Redis (кэш/сессии), S3-хранилище, Celery/RQ для задач.
- **AI-сервисы**: отдельные микросервисы (NLP, CV, Pose) на Python (PyTorch/ONNX), gRPC/HTTP.
- **Веб-превью/админ**: Next.js (этот репозиторий).
- **Интеграции**: Webhooks + OAuth 2.0 где доступно.

## Интеграции с устройствами и весами
- **Apple HealthKit** (iOS): HealthKit + Background Delivery; данные сна, пульса, активности, веса.
- **Google Fit** (Android/Web): OAuth, Scopes для активности/сна/пульса/веса.
- **Garmin Health API**: партнерский доступ, подписка на стресс/сон/ЧСС.
- **Xiaomi Mi Band**: через Google Fit/Apple Health мост; прямой API ограничен.
- **Withings**: OAuth2, измерения веса, жира, мышечной массы; webhooks.
- **Picooc**: официальный публичный API отсутствует; возможна интеграция через партнёрство или прокси с согласия пользователя.

## AI/ML
- **NLP («Нейро»)**: LLM (GPT‑4/4.1/4o-mini) + тонкая настройка, контекст через RAG.
- **CV: распознавание еды**: CNN/ViT с классификацией и порциями; баркод — локально + внешние базы.
- **Pose/техника**: MediaPipe/MoveNet/BlazePose + Heuristics/Classifier для ошибок техники.
- **Предиктивная аналитика срывов**: градиентный бустинг/Seq2Seq на поведенческих и биометриках.

## Данные и модель безопасности
- **Схема**: users, goals, meals, workouts, measurements, devices, challenges, duels, chat_sessions, messages, shopping_lists.
- **Безопасность**: OAuth2/OIDC, mTLS между сервисами, шифрование покоя/в пути.
- **Приватность**: явные согласия на сбор биометрии; granular scopes; право на удаление.

## API
- REST/GraphQL слой; webhooks для провайдеров устройств; подписки для реального времени (SSE/WebSocket) на прогресс вызовов/дуэлей.

## Наблюдаемость
- Centralized logs, metrics, traces; alerting по SLO.