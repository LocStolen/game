 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index f4a518a57cc8663c9c6e72903583f044365ded3e..3dfaf45f299fa1afeddef74abbe9f638ccf9241e 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,33 @@
-# addonvpz
-By Lộc VPz
+# Trung tâm Addon Minecraft
+
+Dự án mẫu trình bày cách xây dựng một nền tảng chia sẻ addon Minecraft với kiến trúc đa ngôn ngữ:
+
+- **Frontend**: HTML + CSS + JavaScript hiện đại để tạo giao diện người dùng thân thiện, hỗ trợ tải lên và liệt kê addon.
+- **Backend**: Node.js (Express) xử lý API REST, lưu trữ tập tin và phục vụ nội dung tĩnh.
+- **Công cụ Python**: Script `scripts/validate_addon.py` giúp xác thực gói addon trước khi tải lên.
+
+## Cài đặt và chạy
+
+```bash
+npm install
+npm run start
+```
+
+Máy chủ sẽ chạy ở `http://localhost:3000`. Bạn có thể truy cập giao diện web và đăng thử addon mới. Các gói tải lên được lưu trong thư mục `data/uploads`.
+
+### Kiểm tra addon bằng Python
+
+```bash
+python scripts/validate_addon.py path/to/addon.mcaddon
+```
+
+Thêm cờ `--json` nếu bạn muốn nhận kết quả dưới dạng JSON để tích hợp với pipeline tự động.
+
+## Cấu trúc thư mục
+
+```
+client/           # Frontend HTML/CSS/JS
+server/           # API Express
+scripts/          # Công cụ Python
+data/             # CSDL JSON và thư mục lưu trữ file
+```
 
EOF
)
