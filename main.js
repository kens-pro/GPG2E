// CTAボタンのクリック処理
function handleInquiry() {
    // アラートでお問い合わせ画面への案内を表示
    alert('お問い合わせありがとうございます。\n\nこちらのピアノについてのご相談・試弾ご予約等は、お電話でお問い合わせください：\n\n🎹ヤマハ特約店㈱トリイ\n📞 お電話：0740-22-2063\n🕒 営業時間： 10:30-19:30　月定休\n\n専門スタッフが丁寧にお答えいたします。');
}

// ページ読み込み時の初期化処理
document.addEventListener('DOMContentLoaded', function() {
    // CTAボタンにアニメーション効果を追加
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        // ページ読み込み時にボタンを軽く光らせる効果
        setTimeout(() => {
            ctaButton.style.animation = 'pulse 2s infinite';
        }, 1000);
        
        // マウスオーバー時の追加効果
        ctaButton.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 2s infinite';
        });
    }
    
    // スムーズスクロール効果（将来の拡張用）
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// CSS keyframes をJavaScriptで動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 8px 20px rgba(196, 168, 107, 0.3);
        }
        50% {
            box-shadow: 0 12px 30px rgba(196, 168, 107, 0.5);
        }
        100% {
            box-shadow: 0 8px 20px rgba(196, 168, 107, 0.3);
        }
    }
`;
document.head.appendChild(style);