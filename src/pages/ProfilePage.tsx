import { useEffect, useMemo, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Heart,
  Wallet,
  PencilLine,
  Lock,
  LogOut,
  Package,
  Truck,
  Star,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { notify } from "@/Utils/notify";

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const { profile, loading, updating, error, fetchProfile, updateProfile } =
    useProfileStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const currentName = useMemo(
    () => profile?.name ?? user?.name ?? "",
    [profile?.name, user?.name]
  );
  const currentEmail = useMemo(
    () => profile?.email ?? user?.email ?? "",
    [profile?.email, user?.email]
  );
  const currentPhone = useMemo(
    () => profile?.phone ?? "",
    [profile?.phone]
  );
  const currentAddress = useMemo(
    () => profile?.address ?? "",
    [profile?.address]
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    setFormData({
      name: currentName,
      email: currentEmail,
      phone: currentPhone,
      address: currentAddress,
    });
  }, [currentName, currentEmail, currentPhone, currentAddress]);

  const displayName = currentName || "Khách hàng";
  const displayEmail = currentEmail || "khachhang@example.com";
  const displayPhone = currentPhone || "Chưa cập nhật";
  const initials = displayName
    .split(" ")
    .map((item) => item.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleChange = (
    field: "name" | "email" | "phone" | "address",
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateProfile = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const payload: {
      name?: string;
      email?: string;
      phone?: string;
      address?: string;
    } = {};
    const nextName = formData.name.trim();
    const nextEmail = formData.email.trim();
    const nextPhone = formData.phone.trim();
    const nextAddress = formData.address.trim();

    if (nextName && nextName !== currentName) {
      payload.name = nextName;
    }

    if (nextEmail && nextEmail !== currentEmail) {
      payload.email = nextEmail;
    }

    if (nextPhone && nextPhone !== currentPhone) {
      payload.phone = nextPhone;
    }

    if (nextAddress && nextAddress !== currentAddress) {
      payload.address = nextAddress;
    }

    if (Object.keys(payload).length === 0) {
      notify.info("Bạn chưa thay đổi thông tin nào.");
      return;
    }

    await updateProfile(payload);
  };

  const stats = [
    {
      label: "Đơn hàng",
      value: "12",
      icon: ShoppingBag,
      accent: "from-amber-500/20 to-amber-500/5",
    },
    {
      label: "Yêu thích",
      value: "8",
      icon: Heart,
      accent: "from-rose-500/20 to-rose-500/5",
    },
    {
      label: "Ví điểm thưởng",
      value: "1.250",
      icon: Wallet,
      accent: "from-emerald-500/20 to-emerald-500/5",
    },
  ];

  const orders = [
    {
      code: "#ECM-240214",
      date: "14/02/2026",
      total: "3.850.000đ",
      status: "Đang giao",
      icon: Truck,
    },
    {
      code: "#ECM-240126",
      date: "26/01/2026",
      total: "2.490.000đ",
      status: "Hoàn tất",
      icon: Package,
    },
    {
      code: "#ECM-240110",
      date: "10/01/2026",
      total: "1.250.000đ",
      status: "Đã xác nhận",
      icon: ShieldCheck,
    },
  ];

  const isBusy = loading || updating;

  return (
    <div className="bg-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.25),_transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-xl font-semibold text-amber-200">
                  {initials}
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      Hồ sơ khách hàng
                    </p>
                    <h1 className="text-2xl font-semibold text-white sm:text-3xl">
                      {displayName}
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-amber-300" />
                      {displayEmail}
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-amber-300" />
                      {displayPhone}
                    </span>
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-amber-300" />
                      Hạng thành viên: VIP
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-amber-400/60 hover:text-amber-200">
                  <PencilLine className="h-4 w-4" />
                  Chỉnh sửa hồ sơ
                </button>
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-amber-400/60 hover:text-amber-200">
                  <Lock className="h-4 w-4" />
                  Đổi mật khẩu
                </button>
                <button
                  type="button"
                  onClick={logout}
                  disabled={isBusy}
                  className="flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-200 transition hover:border-rose-400 hover:text-rose-100"
                >
                  <LogOut className="h-4 w-4" />
                  Đăng xuất
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                    />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-amber-200">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <form
                onSubmit={handleUpdateProfile}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      Thông tin cá nhân
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      Chi tiết tài khoản
                    </h2>
                  </div>
                  <button
                    type="submit"
                    disabled={isBusy}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <PencilLine className="h-3.5 w-3.5" />
                    {updating ? "Đang lưu" : "Lưu thay đổi"}
                  </button>
                </div>
                {error && (
                  <p className="mt-4 text-sm text-rose-300">{error}</p>
                )}
                {loading && (
                  <p className="mt-4 text-sm text-gray-300">
                    Đang tải thông tin hồ sơ...
                  </p>
                )}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Họ & tên
                    </p>
                    <input
                      value={formData.name}
                      onChange={(event) =>
                        handleChange("name", event.target.value)
                      }
                      disabled={isBusy}
                      placeholder="Nhập họ và tên"
                      className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-amber-400/60 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Email
                    </p>
                    <input
                      value={formData.email}
                      onChange={(event) =>
                        handleChange("email", event.target.value)
                      }
                      disabled={isBusy}
                      placeholder="Nhập email"
                      className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-amber-400/60 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Số điện thoại
                    </p>
                    <input
                      value={formData.phone}
                      onChange={(event) =>
                        handleChange("phone", event.target.value)
                      }
                      disabled={isBusy}
                      placeholder="Nhập số điện thoại"
                      className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-amber-400/60 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Địa chỉ
                    </p>
                    <input
                      value={formData.address}
                      onChange={(event) =>
                        handleChange("address", event.target.value)
                      }
                      disabled={isBusy}
                      placeholder="Nhập địa chỉ"
                      className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-amber-400/60 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Ngày tham gia
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      12/08/2024
                    </p>
                  </div>
                </div>
              </form>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      Địa chỉ giao hàng
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      Địa chỉ đã lưu
                    </h2>
                  </div>
                  <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 transition hover:text-white">
                    <MapPin className="h-3.5 w-3.5" />
                    Thêm địa chỉ
                  </button>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="rounded-xl border border-white/10 bg-white/10 p-2 text-amber-200">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        Địa chỉ mặc định
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        {currentAddress || "Chưa cập nhật địa chỉ"}
                      </p>
                    </div>
                    <button className="text-xs uppercase tracking-[0.2em] text-amber-300">
                      Sửa
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                      Trạng thái đơn hàng
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      Đơn gần đây
                    </h2>
                  </div>
                  <button className="text-xs uppercase tracking-[0.2em] text-amber-300">
                    Xem tất cả
                  </button>
                </div>
                <div className="mt-6 space-y-4">
                  {orders.map((order) => {
                    const Icon = order.icon;
                    return (
                      <div
                        key={order.code}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-xl border border-white/10 bg-white/10 p-2 text-amber-200">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {order.code}
                              </p>
                              <p className="text-xs text-gray-400">
                                {order.date}
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200">
                            {order.status}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                          <span>Tổng giá trị</span>
                          <span className="font-semibold text-white">
                            {order.total}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                  Đánh giá & quyền lợi
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Ưu đãi thành viên
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Điểm thưởng tích lũy",
                      value: "1.250 điểm",
                      icon: Star,
                    },
                    {
                      title: "Mã ưu đãi đang có",
                      value: "3 vouchers",
                      icon: Wallet,
                    },
                    {
                      title: "Hạng thành viên",
                      value: "VIP Premium",
                      icon: User,
                    },
                  ].map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl border border-white/10 bg-white/10 p-2 text-amber-200">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">
                              {benefit.title}
                            </p>
                            <p className="text-sm font-semibold text-white">
                              {benefit.value}
                            </p>
                          </div>
                        </div>
                        <button className="text-xs uppercase tracking-[0.2em] text-amber-300">
                          Chi tiết
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
