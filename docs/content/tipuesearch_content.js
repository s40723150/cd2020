var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository ： https://github.com/s40723150/cd2020 \n Blog： https://s40723150.github.io/cd2020/blog \n Presentation： https://s40723150.github.io/cd2020/reveal \n Group\xa0Repository： https://github.com/s40723150/cd2020ag2 \n Group Presentation： https://s40723150.github.io/cd2020ag2/reveal \n Group Website： https://s40723150.github.io/cd2020ag2 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '可攜系統', 'text': 'Create Portable Programming System for\xa0Windows 10 \n \n PortableGit： https://git-scm.com/download/win \xa0 \n MSYS2： https://www.msys2.org/ \xa0 \n python3.8.1： https://www.python.org/downloads/windows/ \xa0 \n SciTE： https://www.scintilla.org/SciTEDownload.html \xa0 \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0 \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \n Fossil SCM： https://www.fossil-scm.org/ \xa0 \n Flutter： https://github.com/flutter/flutter\xa0 \xa0 \n CoppeliaSim： https://www.coppeliarobotics.com/winVersions \xa0 \n Webots： https://cyberbotics.com/ \n \n \n Visual Studio Code： https://github.com/microsoft/vscode \xa0 \n \n home/home_mdecourse：存放 ssh 的資料和.gitconfig \n tmp：放 clone 下來的倉儲 \n ShareX： https://getsharex.com/downloads/ \n putty： 老師整理的 putty \xa0或 \xa0 個人整理的 putty.7z', 'tags': '', 'url': '可攜系統.html'}, {'title': '配置系統', 'text': 'Create Portable Programming System for\xa0Windows 10 \n 在可攜系統目錄下先創一個 data 目錄 \n PortableGit： https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的目錄下 \n python3.8.1： https://www.python.org/downloads/windows/ \xa0 下載 Download Windows x86-64 executable installer 準備安裝 3.8.2 python 解譯器，安裝完成後將完整資料放在 data/py381目錄底下 \n SciTE： https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download，解壓縮檔案至 data/wscite432，就是可以直接執行的 Scite.exe 編輯器，若希望以 UtF-8 編碼開啟文件，就必須啟用 Options 下拉式功能表中的 Global Options File（同\xa0SciTEGlobal.properties 檔案）其中的預設值 code.page=0 （為Windows 內定的 Big-5 編碼）修改設定為 code.page=65001，表示使用使 UTF-8 編碼，若要開啟即時更新內容，將load.on.activate=1 前面的井字號拿掉，就會即時更新了（SciTE 須重啟） 修改成 UTF-8 編碼 修改成即時更新 \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0git clone 整個倉儲到 data 目錄下並命名目錄為 tcc \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \xa0pip install jupyterlab==2.0.1 自動執行安裝 \n Fossil SCM： https://www.fossil-scm.org/ \xa0下載 fossil scm 解壓縮後將 fossil.exe 放到 data 目錄下 \n Flutter： https://github.com/flutter/flutter\xa0 \xa0(在 data 目錄底下 git clone https://github.com/flutter/flutter.git -b stable) \n Visual Studio Code： https://github.com/microsoft/vscode \xa0(目前是先安裝，安裝完成後把資料放 data/vscode 目錄下) \n CoppeliaSim： https://www.coppeliarobotics.com/winVersions \xa0下載\xa0 CoppeliaSim Edu, Binaries \xa0解壓縮後放到 data 目錄下 \n home/home_mdecourse：存放 ssh 的資料和.gitconfig \n tmp：放 clone 下來的倉儲 \n ShareX： https://getsharex.com/downloads/ \n putty： 老師整理的 putty \xa0或  個人整理的 putty.7z \n start.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit \n stop.bat \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n 詳細流程在 W2 頁面 \n 基礎可攜系統 下載 有配置Webots 有配置Webots+ CoppeliaSim ( CoppeliaSim V4.0.0 ，含 xelatex) P.S. 可以下載可攜系統的leo都已經升級到6.2.1版本了', 'tags': '', 'url': '配置系統.html'}, {'title': 'pip', 'text': '安裝pip \n 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行 \n python get-pip.py \n \n \n 安裝 CMSiMDE 所需模組 \n 利用 pip 安裝 flask, bs4, lxml, pelican, markdown, flask_cors, leo (可單獨安裝區少的模組) \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 重新安裝Leo \n 解除安裝現有Leo(6.1版本) \n pip uninstall leo \n 安裝Leo 6.2.1版本 \n pip install leo==6.2.1 \n \n', 'tags': '', 'url': 'pip.html'}, {'title': 'SSH', 'text': 'Key的新建 \n 請參考老師的 網頁 有詳細的設定流程。 \n 批次檔設定 \n 執行隨身碟 SciTE.exe ( 位於 201906_fall\\data\\wscite415\\wscite 目錄下 ) \n 開啟 \xa0start_mdecourse.bat 並加入 \n REM for putty \n Set GIT_HOME=%Cdisk%:\\portablegit\\bin\\ \n Set GIT_SSH=%Disk%:\\putty\\plink.exe \n SSH 設定 \n 到\xa0 .ssh\xa0 的目錄下 編輯\xa0 config,插入 \n P roxy Command y:/putty/plink.exe github.com %h %p \n 並註解掉 \n IdentityFile "y:\\home_mdecourse\\.ssh\\id_rsa" \n \n 設定 SSH key 的使用配置 ( 使用\xa0Ipv 6 網路 ) \n 先下載\xa0 putty \xa0 , 放到可攜系統的 data 目錄底下 \n Key 轉換 ( 此設定方法是拿先前的\xa0 Open SSH key \xa0 ) \n 先建立一個 key ( 若之前已經有 Open SSH 的 key 就可以直接用那把 key ) 執行\xa0puttygen.exe\xa0 載入一個\xa0 Open SSH 的 key \n \n *p.s.\xa0 若是使用之前的 key , bits 數請寄的設定為 4096 , 轉換成的類型請設定成 rsa\xa0 轉存成 rsa 的 prviate key ( ppk檔 ) \n \n Putty 設定 \n 執行 putty.exe 建立一個 session 叫 github.com \n Host Name : github.com Port : 22 Connection type : SSH \n \n 設定 proxy： \n Proxy type : HTTP Proxy hostname :\xa0 [2001:288:6004:17::7]\xa0\xa0\xa0\xa0 Port : 3128 Do DNS name lookup at proxy end :\xa0 Auto Username :\xa0 kmolab Password : kmolab \n \n 設定 SSH 底下的 Auth \n Private key file for authentication :\xa0\xa0 ( 請指定 rsa- key \xa0 的位置\xa0 ) \n \n *p.s.\xa0 需指定 ppk 檔 \n 儲存 session 設定 \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Q&A', 'text': 'Q：缺少 lxml 模組 \n A：安裝 lxml 模組 \n pip install lxml \n \n Q：缺少 flask 模組 \n A：安裝 flask 模組 \n pip install flask \n Q：缺少 flask_cors 模組 \n A：安裝 \xa0flask_cors 模組 \n pip install  flask_cors \n \n', 'tags': '', 'url': 'Q&A.html'}, {'title': '紀錄', 'text': 'W2： 安裝 python, SciTE, Portablegit, msys2,\xa0 Tiny C Compiler,\xa0Jupyterlab, Fossil SCM, Leo Editor 和 Flutter 放入可攜系統(有先放先前的putty和ssh到測試是否可以順利使用ssh改版)。 \n W3： 配置 webots 到可攜系統上，測試msys2裡建立gcc編譯環境。 \n W4： 將 xelatex 配置到可攜系統上，完成測試msys2裡建立gcc編譯環境。 \n W5： 將 CoppeliaSim 放到可攜系統上。將 Leo 升級到6.2.1。 \n W6： 協助同組同學完成OBS的設定及解決顯示器擷取的問題。 \n W7： 整理分組和個人網頁內容。整理電子書重點。 \n W10： 將亂數分組的程式放到 web site，啟用Google API。 \n W11： 讓電腦透過網頁可連進Ubuntu所開的CMS。 \n W12： 補拍第10週 Google API 的影片，還有拍VirtualBox的網路連線設定影片。 可透過putty操控Ubuntu20.04執行xterm nautilus 和 CoppeliaSim。', 'tags': '', 'url': '紀錄.html'}, {'title': 'W2', 'text': '先創可攜系統的目錄\xa0 ”CD2020”\xa0 ，在\xa0 CD2020\xa0 的目錄下新增\xa0 ”data” 。 \n Python 3.8.2 到\xa0 https://www.python.org/downloads/release/python-382/   搜尋 ”Windows x86-64 executable installer” 並下載 ”Windows x86-64 executable installer” ，下載完後，執行 python-3.8.2-amd64.exe \n 選Customize installation 取消選取pip選項，Next Install 等它安裝完成 Close 到剛剛安裝對應的目錄下去複製檔案 再先前創立的data目錄底下新增”py382”的目錄，再把複製到的檔案放到py382目錄裡 \n SciTE： 到 https://www.scintilla.org/SciTEDownload.html ，下載\xa0 ”  full 64-bit download ” ，載完後解壓縮檔案，並把檔案\xa0 ”wscite432”\xa0 搬移至\xa0 data\xa0 目錄底下(或是直接解壓縮到data目錄底下)，再到 CD2020\\data\\wscite432\\wscite 目錄下執行 ”SciTE.exe” 。 \n 開啟 SciTE 後，到\xa0 Options → Open Global Option File  進行切換到 1 UTF-8 編碼及開啟 2 即時更新： 1  將code.page=0更改成code.page=65001(切換到UTF-8編碼) 2  將#load.on.activate=1的井字號拿掉(開啟即時更新)，儲存，關閉SciTE。 \n 在 data 目錄下新增 ”home” 目錄，開啟SciTE \n start.bat(儲存在CD2020目錄底下) \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit \n stop.bat(儲存在CD2020目錄底下) \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n MSYS2： https://www.msys2.org/  下載  msys2-x86_64-20190524.exe  並執行 Next Browse→選擇CD2020\\data\\msys64的目錄(自己新建msys64的目錄也可以，若沒有新建目錄安裝時會自動建立目錄) →Next Next 在安裝的同時去下載portablegit \n PortableGit： https://git-scm.com/download/win 下載64-bit Git for Windows Portable安裝在data目錄下 OK \n msys2 安裝完成 反選 Run MSYS2 64bit now選項，finish 等PortableGit安裝完成重啟可攜，測試。 \n 安裝pip： 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行 \n python get-pip.py \n 測試pip是否正常運作 \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 使用pip安裝flask,bs4,xml,elican, mrkdown,flask_cors,leo模組 安裝過程若出現紅字，請重新執行一次模組安裝指令，應該會正常安裝。 \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0 \n git clone https://github.com/TinyCC/tinycc.git tcc \n git clone 整個倉儲到 data 目錄下並命名目錄為 tcc \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \xa0 \n pip install jupyterlab==2.0.1 \n 自動執行安裝 \n Fossil SCM： https://www.fossil-scm.org/ \xa0下載 fossil scm 解壓縮後將 fossil.exe 放到 data 目錄下 \n Putty： 下載 putty 放到data裡面，把之前的ssh和.gitconfig放到home裡面測試是否可以成功用ssh推送資料。', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': 'Webots設定 \n MSYS2裡建立Windows 64位元環境下gcc編譯環境，安裝 mingw-w64-x86_64-gcc 與 mingw-w64-x86_64-toolchain。 \n <!-- 安裝 mingw-w64-x86_64-gcc -->\npacman -S mingw-w64-x86_64-gcc\n<!-- 安裝 mingw-w64-x86_64-toolchain -->\npacman -S mingw-w64-x86_64-toolchain \n 安裝完成後，測試編譯以下簡單的 C 程式： \n // hello.c\n#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n 存在 tmp\\c_ex 目錄下，命名為 hello.c然後利用： \n gcc -o hello.exe hello.c \n 表示要將編譯 hello.c 的 output 設為 hello.exe 完成後，直接執行 hello.exe \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4 W5', 'text': 'xelatex： 到\xa0 https://miktex.org/download \xa0下載，載下來的檔案重新命名為\xa0 miktex-portable.exe ，再執行安裝。在 start.bat 納入 Y:\\miktex-portable\\texmfs\\install\\miktex\\bin\\x64 搜尋路徑，開啟隨身系統後，確定可以執行 xelatex。 \n set path_xelatex=%Disk%:\\miktex-portable\\texmfs\\install\\miktex\\bin\\x64; \n 將下列 LaTeX 存為 article.tex \n % UTF-8 encoding\n% Compile with latex+dvipdfmx, pdflatex, xelatex or lualatex\n% XeLaTeX is recommanded\n\\documentclass{article}\n\\usepackage{xeCJK}\n\\setCJKmainfont{SimSun}\n\\begin{document}\n\\LaTeX 文章内容。\n\\end{document} \n 利用 \n xelatex article.tex \n 再測試 \n \\documentclass[]{article}\n\n\\usepackage{graphicx}\n\\usepackage{xeCJK}\n\\setCJKmainfont{SimSun}\n\n\\begin{document}\n\n90 degree rotation \\rotatebox[origin=c]{90}{MDE 機械設計.}\n\nVertical Flip \\scalebox{1}[-1]{NFU 虎尾科大.}\n\nHorizontal Flip \\scalebox{-1}[1]{台灣 Taiwan.}\n\n\\end{document} \n \n \n CoppeliaSim： 下載  CoppeliaSim Edu, Binaries 的版本，把資料放到可攜系統下 \n', 'tags': '', 'url': 'W4 W5.html'}, {'title': 'W7', 'text': '更新個人倉儲的內容，讓 內 容比較有重點。在reveal內加入2~7週的記錄內容及xelatex得配置說明。 \n 進度回報 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '將 亂數分組程式 放到網頁上當作 服務 \n 利用AJAX的特性，讀取選項的資料(在選擇2a或2b的資料後不會刷新頁面) 讀到的資料利用 <input type="submit">提交所選擇的表單 送出表單 後再利用script執行亂數分組的程式(在網頁上只能執行javascript的程式) \n 啟用 Google + Domain API \n 設定 OAuth 2.0 客戶端ID \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '設定8443的port號可以從電腦網頁連進去Ubuntu 20.04所啟動的wsgi.py。 設定的內容有再更新，之前的內容有些錯誤所以這就不放了。', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '設定IPv4網路環境下的網路設定，並讓putty操控Ubuntu20.04， 詳細流程 。 \n Google+ Domain API \n \n Ubontu20.04 與 Putty控制之連線設定', 'tags': '', 'url': 'W12.html'}, {'title': 'CMS', 'text': '使用Google + Domain API為@ gm.nfu.edu.tw用戶設置登錄名 \n https://console.developers.google.com \n 設置 OAuth 2.0客戶端ID \n 使用 https://github.com/authomatic/authomatic 允許用戶使用Google或Github帳戶登錄。 \n 獲取您的oauth_gm.txt文件內容： \n \n 登錄到您的@gm帳戶 \n 到 https://console.developers.google.com \n 接受許可並創建Google API項目 \n 啟用Google +Domain API \n 在Google + Domain API憑證下，按CONFIGURE CONSENT SCREEN按鈕 \n 選擇內部或外部用戶類型並添加新的應用程序名稱 \n 在“ API和服務”下，進入“憑證”頁面 \n 為Web應用程序 創建“ \xa0 OAuth 2.0客戶端ID”類型的憑據 \n 授權的JavaScript來源： https://localhost:8443 \n 授權的重定向URI： https://localhost:8443/login/google/ \n 將自己的的客戶ID和客戶密碼保存到oauth_gm.txt中 \n \n \n 安裝Authomatic imutils opencv-python \n pip install Authomatic imutils opencv-python', 'tags': '', 'url': 'CMS.html'}, {'title': 'VirtualBox', 'text': 'Setting VirtualBox Network \n 在VirtualBox→Files→Preferences →Network 新增一個網路設定，支援DHCP和IPV6 \n \n 再到cd2020pj1的虛擬主機設定NAT的Port號 \n IPv4設定：Guest IP是透過ifconfig查出來(IPv6的也是) \n \n IPv6設定 \n \n Ubuntu 20.04的網路設定 \n \n P.S.\xa0 Guest IP 的部分可以在虛擬主機開機的狀態下進行修改設定 \n IP 查詢 \n ifconfig \n 若跳出尚未安裝net-tools的話請安裝 \n sudo apt install net-tools \n 若在 IPv6 環境下有跳出網路錯誤 \n \n IPv6環境設定是否正確 請到 /etc/netplan 目錄下檢查 00-installer-config.yaml 檔案內的設定 \n cd /etc/netplan\nsudo vi 00-installer-config.yaml \n 00-installer-config.yaml \n # This is the network config written by \'subiquity\'\nnetwork:\n\tethernets:\n\t\tenpes3:\n\t\t\tdhcp4: true\n\t\t\tdhcp6: true\n\t\t\tnameservers:\n\t\t\t\taddresses:\n\t\t\t\t\t- 2001:b000:168::1\n\tversion: 2 \n 編輯完成後:wq跳出編輯並儲存，並更新netplan設定 \n sudo netplan apply \n \n \n proxy問題 請到 /etc/apt/apt.conf.d 目錄下檢查是否有proxy.conf檔案，若沒有，請用新增(直接用vi編輯器開啟proxy.conf就會自動新增) \n cd /etc/apt/apt.conf.d\nsudo vi proxy.conf \n proxy.conf的檔案內容 \n Acquire::http::proxy "http://[2001:288:6004:17::填port號]:3128"; \n 先增完內容後要更新apt \n sudo apt update \n \n \n 網路設定完成後可以啟動wsgi.py \n 再用電腦上的網頁(不是虛擬主機的網頁)到\xa0 https://localhost:8443/看是否成功連上，如果成功連上後就換putty \n Putty設定 \n IPv4 \n Host Name：localhost Port：22 Connection type：SSH \n \n IPv6 \n Host Name：::1 Port：22 Connection type：SSH \n \n X11(IPv4或IPv6設定都一樣) \n ▣Enable X11 forwarding \n X display location：localhost:0.0 \n \n Xming \n 安裝 Xming \n 直接安裝後搬移至可攜 \n 或是直接安裝在隨身碟成可攜 \n \n 安裝完成後執行XLaunch.exe，全部為預設設定。 \n 在putty執行xtrem看是否會成功跳出 \n File Manager \n 執行nautilus若無法執行，請安裝nautilus \n sudo apt install nautilus \n 安裝完成後再執行一次 nautilus，正常的話就會跳出FileManager \n CoppeliaSim \n 到coppeilasim的目錄下開啟coppeilaSim.sh的檔案 \n ./coppeilaSim.sh \n 之後就會開啟CoppeilaSim了 \n', 'tags': '', 'url': 'VirtualBox.html'}, {'title': 'Service', 'text': '每組隨機抽選: \n 學員名單 URL: \n \n 2a \n 2b \n \n  每組抽選人數:      \n \n', 'tags': '', 'url': 'Service.html'}]};