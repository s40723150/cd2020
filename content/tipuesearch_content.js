var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'CD2020', 'text': 'Create Portable Programming System for\xa0Windows 10 \n 在可攜系統目錄下先創一個 data 目錄 \n PortableGit： https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的目錄下 https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download，解壓縮檔案至 data/wscite432，就是可以直 \n python3.8.1： https://www.python.org/downloads/windows/ \xa0 下載 Download Windows x86-64 executable installer 準備安裝 3.8.2 python 解譯器，安裝完成後將完整資料放在 data/py381目錄底下 \n SciTE：接執行的 Scite.exe 編輯器，若希望以 UtF-8 編碼開啟文件，就必須啟用 Options 下拉式功能表中的 Global Options File（同\xa0SciTEGlobal.properties 檔案）其中的預設值 code.page=0 （為Windows 內定的 Big-5 編碼）修改設定為 code.page=65001，表示使用使 UTF-8 編碼，若要開啟即時更新內容，將load.on.activate=1 前面的井字號拿掉，就會即時更新了（SciTE 須重啟） 修改成 UTF-8 編碼 修改成即時更新 \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0git clone 整個倉儲到 data 目錄下並命名目錄為 tcc \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \xa0pip install jupyterlab==2.0.1 自動執行安裝 \n Fossil SCM： https://www.fossil-scm.org/ \xa0下載 fossil scm 解壓縮後將 fossil.exe 放到 data 目錄下 \n Flutter： https://github.com/flutter/flutter\xa0 \xa0(在 data 目錄底下 git clone https://github.com/flutter/flutter.git -b stable) \n Visual Studio Code： https://github.com/microsoft/vscode \xa0(目前是先安裝，安裝完成後把資料放 data/vscode 目錄下) \n home/home_mdecourse：存放 ssh 的資料 \n tmp：放 clone 下來的倉儲 \n ShareX： https://getsharex.com/downloads/ \n putty： 老師整理的 putty \xa0或  個人整理的 putty.7z \n start.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py381\\DLLs;%Disk%:\\py381\\Lib;%Disk%:\\py381\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py381\n\n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset path_python=%Disk%:\\py381;%Disk%:\\py381\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_vscode=%Disk%:\\vscode;\nset path_tcc=%Disk%:\\tcc;\n\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_cmake%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit \n stop.bat \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\ntaskkill /IM ShareX.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n', 'tags': '', 'url': 'CD2020.html'}, {'title': 'pip', 'text': '安裝 CMSiMDE 所需模組： \n 利用 pip 安裝 flask, bs4, lxml, pelican, markdown, flask_cors, leo (可單獨安裝區少的模組) \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n', 'tags': '', 'url': 'pip.html'}, {'title': 'SSH', 'text': '批次檔設定 \n 執行隨身碟 SciTE.exe ( 位於 201906_fall\\data\\wscite415\\wscite 目錄下 ) \n 開啟 \xa0start_mdecourse.bat 並加入 \n REM for putty \n Set GIT_HOME=%Cdisk%:\\portablegit\\bin\\ \n Set GIT_SSH=%Disk%:\\putty\\plink.exe \n SSH 設定 \n 到\xa0 .ssh\xa0 的目錄下 編輯\xa0 config,插入 \n P roxy Command y:/putty/plink.exe github.com %h %p \n 並註解掉 \n IdentityFile "y:\\home_mdecourse\\.ssh\\id_rsa" \n \n 設定 SSH key 的使用配置 ( 使用\xa0Ipv 6 網路 ) \n 先下載\xa0 putty \xa0 , 放到可攜系統的 data 目錄底下 \n Key 轉換 ( 此設定方法是拿先前的\xa0 Open SSH key \xa0 ) \n 先建立一個 key ( 若之前已經有 Open SSH 的 key 就可以直接用那把 key ) 執行\xa0puttygen.exe\xa0 載入一個\xa0 Open SSH 的 key \n \n *p.s.\xa0 若是使用之前的 key , bits 數請寄的設定為 4096 , 轉換成的類型請設定成 rsa\xa0 轉存成 rsa 的 prviate key ( ppk檔 ) \n \n Putty 設定 \n 執行 putty.exe 建立一個 session 叫 github.com \n Host Name : github.com Port : 22 Connection type : SSH \n \n 設定 proxy： \n Proxy type : HTTP Proxy hostname :\xa0 [2001:288:6004:17::7]\xa0\xa0\xa0\xa0 Port : 3128 Do DNS name lookup at proxy end :\xa0 Auto Username :\xa0 kmolab Password : kmolab \n \n 設定 SSH 底下的 Auth \n Private key file for authentication :\xa0\xa0 ( 請指定 rsa- key \xa0 的位置\xa0 ) \n \n *p.s.\xa0 需指定 ppk 檔 \n 儲存 session 設定 \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Q&A', 'text': 'Q：缺少 lxml 模組 \n A：安裝 lxml 模組 \n pip install lxml \n \n Q：缺少 flask 模組 \n A：安裝 flask 模組 \n pip install flask \n Q：缺少 flask_cors 模組 \n A：安裝 \xa0flask_cors 模組 \n pip install  flask_cors \n', 'tags': '', 'url': 'Q&A.html'}]};