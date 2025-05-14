// WhatsApp按钮功能管理
function initWhatsAppButton() {
    // 创建WhatsApp按钮元素
    const whatsappButton = document.createElement('a');
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.href = '#';
    whatsappButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4054 3.5946C18.1607 1.35 15.1714 0.0964 11.9946 0.0911C5.4375 0.0911 0.0964 5.4322 0.0911 11.9893C0.0857 14.1161 0.6643 16.1893 1.7518 18.0054L0 24L6.1339 22.2857C7.8857 23.2607 9.9161 23.7804 11.9893 23.7857H11.9946C18.5464 23.7857 23.8929 18.4446 23.8982 11.8875C23.9036 8.7214 22.65 5.7375 20.4054 3.5946ZM11.9946 21.7875C10.2 21.7875 8.4429 21.2893 6.9107 20.3571L6.5518 20.1429L2.8339 21.1607L3.8679 17.5339L3.6268 17.1589C2.5982 15.5625 2.0839 13.7036 2.0893 11.9893C2.0946 6.5357 6.5411 2.0893 12 2.0893C14.6411 2.0946 17.1214 3.1339 18.9857 5.0036C20.85 6.8732 21.8839 9.3589 21.8786 12C21.8732 17.4536 17.4268 21.7875 11.9946 21.7875ZM17.4161 14.5179C17.1214 14.3732 15.6643 13.6554 15.3911 13.5589C15.1179 13.4625 14.9196 13.4143 14.7214 13.7089C14.5232 14.0036 13.95 14.6732 13.7732 14.8714C13.5964 15.0696 13.4196 15.0911 13.125 14.9464C11.3839 14.0786 10.2375 13.3982 9.0857 11.4321C8.7857 10.9071 9.3911 10.9554 9.9536 9.8304C10.05 9.6321 10.0018 9.4607 9.9268 9.3161C9.8518 9.1714 9.2625 7.7143 9.0161 7.125C8.7804 6.5518 8.5393 6.6321 8.3518 6.6214C8.175 6.6107 7.9768 6.6107 7.7786 6.6107C7.5804 6.6107 7.2589 6.6857 6.9857 6.9804C6.7125 7.275 5.9464 7.9929 5.9464 9.45C5.9464 10.9071 6.9964 12.3107 7.1411 12.5089C7.2857 12.7071 9.2518 15.7446 12.2732 17.0143C14.1321 17.8339 14.8714 17.8929 15.8036 17.7429C16.3768 17.6464 17.5607 17.0143 17.8071 16.3286C18.0536 15.6429 18.0536 15.0536 17.9786 14.9304C17.9036 14.8071 17.7054 14.7321 17.4161 14.5179Z"/>
        </svg>
    `;

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-float {
            position: fixed;
            bottom: 90px;
            right: 20px;
            background-color: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s;
            z-index: 1000;
        }

        .whatsapp-float:hover {
            transform: scale(1.1);
        }
    `;

    // 添加到文档
    document.head.appendChild(style);
    document.body.appendChild(whatsappButton);

    // 处理点击事件
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = '85252000007'; // 香港号码
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // 构建WhatsApp链接
        const whatsappUrl = isMobile
            ? `whatsapp://send?phone=${phoneNumber}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

        // 尝试打开WhatsApp
        window.location.href = whatsappUrl;

        // 处理WhatsApp可能未安装的情况
        setTimeout(function() {
            // 如果页面还在（WhatsApp未打开），则重定向到应用商店或提示安装
            if (document.hasFocus()) {
                if (isMobile) {
                    if (confirm('看起来您还没有安装WhatsApp，是否前往下载？')) {
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            window.location.href = 'https://apps.apple.com/app/whatsapp-messenger/id310633997';
                        } else {
                            window.location.href = 'https://play.google.com/store/apps/details?id=com.whatsapp';
                        }
                    }
                } else {
                    window.location.href = 'https://www.whatsapp.com/download';
                }
            }
        }, 1000);
    });
}

// 当DOM加载完成后初始化WhatsApp按钮
document.addEventListener('DOMContentLoaded', initWhatsAppButton);